/**
 * Simple markdown to HTML converter for blog posts
 */

export function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // Paragraphs (convert double line breaks to <p> tags)
  const paragraphs = html.split('\n\n');
  html = paragraphs
    .map(para => {
      const trimmed = para.trim();
      // Don't wrap headers in p tags
      if (trimmed.startsWith('<h')) return trimmed;
      // Don't wrap empty strings
      if (!trimmed) return '';
      return `<p>${trimmed.replace(/\n/g, '<br>')}</p>`;
    })
    .join('\n');

  return html;
}
