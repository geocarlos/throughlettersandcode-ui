function getPreview(content: string) {
    const preview = content.replace(/<\/?\w+>/g, '').substring(0, 140);
    return content.length > preview.length ? `${preview}...` : preview;
}

export { getPreview };
