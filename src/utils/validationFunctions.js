export const validateWord = (userInput, msg, ref) => {
  const engLetters = /^[A-Za-z]+$/gm;
  if (!engLetters.test(userInput)) {
    msg("For the word field please use only latin characters");
    ref.current.focus();
  } else {
    msg("");
    return true;
  }
};

export const validateTranscription = (userInput, msg, ref) => {
  const noNumbers = /[0-9]/g;
  if (noNumbers.test(userInput)) {
    msg("For the transcription field please don't use numbers");
    ref.current.focus();
  } else {
    msg("");
    return true;
  }
};

export const validateTranslation = (userInput, msg, ref) => {
  const rusLetters = /^[А-Яа-я]+$/gm;
  if (!rusLetters.test(userInput)) {
    msg("For the translation field please use only cyrillic characters");
    ref.current.focus();
  } else {
    msg("");
    return true;
  }
};

export const validateTags = (userInput, msg, ref) => {
  const engRusLetters = /^[A-Za-zА-Яа-я\s]*$/gm;
  if (!engRusLetters.test(userInput)) {
    msg("For the tags field please use only latin or cyrillic characters");
    ref.current.focus();
  } else {
    msg("");
    return true;
  }
};
