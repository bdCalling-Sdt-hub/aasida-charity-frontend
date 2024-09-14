export const firstLetterUppercase = (text) => {
  if (text) {
    let splitText = text?.split(" ");

    if (splitText.length > 1) {
      const uppercaseArray = splitText.map((text) => {
        return text[0].toUpperCase() + text.slice(1, text.length);
      });

      return uppercaseArray.join(" ");
    }

    return text[0].toUpperCase() + text.slice(1, text.length);
  }
};

export default function truncatedText(text, maxLength = 60) {
  if (text?.length <= maxLength) return text;

  // Truncate within allowed length of text
  const truncatedByLength = text.substr(0, maxLength).trim();

  // Truncated text till last space to avoid cut off
  const lastSpaceIndex = truncatedByLength.lastIndexOf(" ");
  const finalText = truncatedByLength.substr(0, lastSpaceIndex).trim();

  return `${finalText}...`;
}
