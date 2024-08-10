const MarkdownIt = require('markdown-it');
const Handlebars = require('handlebars');
const cheerio = require('cheerio');

const fs = require('fs-extra');
const path = require('path');

// Initialize Markdown-It
const md = new MarkdownIt();

// Directory where markdown files are stored
const chaptersDir = path.join(__dirname, 'assets/chapters');
const imagesFolder = 'assets/images/';

function markdownToHtml(markdown) {
    // markdown = markdown.replace(/\!\[(.*?)\]\((.*?)\)/g, (match, alt, src) => {
    //     return `![${alt}](${path.join(imagesFolder, src)})`;
    // });
    let html = md.render(markdown);
    const $ = cheerio.load(html);
    $('img').each(function() {
        const img = $(this);
        img.attr('src', path.join(imagesFolder, img.attr('src')));
        const title = img.attr('title');
        if (title) {
            img.after(title);
            img.after($('<br/>'));
        }
    });
    return $("body").html();
    // return markdown.split("\n")[0];
}

// Read all markdown files in the directory
let chapters = [];
const files = fs.readdirSync(chaptersDir).filter(file => file.endsWith('.md'));
files.forEach(file => {
    const slug =  file.slice(0, file.lastIndexOf('.'));
    const sectionsPath = path.join(chaptersDir, slug);
    let sections = [];
    const sectionFiles = fs.existsSync(sectionsPath) ? fs.readdirSync(sectionsPath).filter(file => file.endsWith('.md')) : [];
    sectionFiles.forEach(sectionFile => {
        const sectionSlug =  sectionFile.slice(0, sectionFile.lastIndexOf('.'));
        const sectionMarkdown = fs.readFileSync(path.join(sectionsPath, sectionFile), 'utf-8');
        sections.push({
            slug: `c-${slug.split('-')[0]}-s-${sectionSlug}`,
            title: sectionMarkdown.split('\n')[0].replace("### ", ''),
            content: markdownToHtml(sectionMarkdown),
        });
    });
    const markdown = fs.readFileSync(path.join(chaptersDir, file), 'utf-8');
    chapters.push({
        slug: `c-${slug}`,
        title: markdown.split('\n')[0],
        content: markdownToHtml(markdown),
        sections: sections,
    })
});

console.log(chapters);

// // Load the HTML template
const templatePath = path.join(__dirname, 'template.hbs');
const templateSource = fs.readFileSync(templatePath, 'utf-8');
const template = Handlebars.compile(templateSource);

// Inject the content into the template
const result = template({ chapters });

// Write the result to index.html
const outputPath = path.join(__dirname, 'index.html');
fs.writeFileSync(outputPath, result);

console.log('index.html generated successfully.');
