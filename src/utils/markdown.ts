/**
 * Simple markdown to HTML converter for blog posts
 */

export function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Remove the first H1 heading (it's already shown as page title)
  html = html.replace(/^# .*$/m, '');

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

  // YouTube embeds - must come before regular links
  // Handle pattern: [![title](thumbnail)](youtube-url)
  html = html.replace(/\[!\[([^\]]+)\]\(https:\/\/img\.youtube\.com\/vi\/([a-zA-Z0-9_-]+)\/[^\)]+\)\]\(https:\/\/www\.youtube\.com\/watch\?v=\2\)/gim, 
    '<div class="youtube-embed"><iframe width="100%" height="400" src="https://www.youtube.com/embed/$2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');
  
  // Handle pattern: ![title](youtube-watch-url)
  html = html.replace(/!\[(.+?)\]\(https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)\)/gim, 
    '<div class="youtube-embed"><iframe width="100%" height="400" src="https://www.youtube.com/embed/$2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');
  
  // Handle pattern: ![title](thumbnail-url)
  html = html.replace(/!\[(.+?)\]\(https:\/\/img\.youtube\.com\/vi\/([a-zA-Z0-9_-]+)\/[^)]+\)/gim, 
    '<div class="youtube-embed"><iframe width="100%" height="400" src="https://www.youtube.com/embed/$2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');

  // Handle pattern: ![title](youtube-shorts-url)
  html = html.replace(/!\[(.+?)\]\(https?:\/\/(?:www\.)?youtube\.com\/shorts\/([a-zA-Z0-9_-]+)\)/gim, 
    '<div class="youtube-embed"><iframe width="100%" height="400" src="https://www.youtube.com/embed/$2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');

  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/gim, '<img src="$2" alt="$1" style="max-width:100%;border-radius:8px;margin:1rem 0" />');

  // Links
  html = html.replace(/\[(.+?)\]\((https?:\/\/[^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  const paragraphs = html.split('\n\n');
  html = paragraphs
    .map(para => {
      const trimmed = para.trim();
      // Don't wrap headers or block-level elements in p tags
      if (trimmed.startsWith('<h') || trimmed.startsWith('<div') || trimmed.startsWith('<img')) return trimmed;
      // Don't wrap empty strings
      if (!trimmed) return '';
      return `<p>${trimmed.replace(/\n/g, '<br>')}</p>`;
    })
    .join('\n');

  return html;
}
