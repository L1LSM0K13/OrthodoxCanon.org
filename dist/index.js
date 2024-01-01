"use strict";

// Toggling Parallel Bible
document.getElementById("parallelBtn").addEventListener("click", function () {
  const mainText = document.getElementById("mainText");
  const parallelText = document.getElementById("parallelText");

  if (
    !mainText.classList.contains("col-span-2") &&
    !parallelText.classList.contains("hidden")
  ) {
    mainText.classList.add("col-span-2");
    parallelText.classList.add("hidden");

    mainText.classList.add("xl:mx-52", "lg:mx-40", "md:mx-28", "sm:mx-12");
    mainText.classList.remove("xl:ml-52", "lg:ml-40", "md:ml-28", "sm:ml-12");

    parallelText.classList.add("xl:mx-52", "lg:mx-40", "md:mx-28", "sm:mx-12");
    parallelText.classList.remove(
      "xl:mr-52",
      "lg:mr-40",
      "md:mr-28",
      "sm:mr-12"
    );
  } else {
    mainText.classList.remove("col-span-2");
    parallelText.classList.remove("hidden");

    mainText.classList.remove("xl:mx-52", "lg:mx-40", "md:mx-28", "sm:mx-12");
    mainText.classList.add("xl:ml-52", "lg:ml-40", "md:ml-28", "sm:ml-12");

    parallelText.classList.remove(
      "xl:mx-52",
      "lg:mx-40",
      "md:mx-28",
      "sm:mx-12"
    );
    parallelText.classList.add("xl:mr-52", "lg:mr-40", "md:mr-28", "sm:mr-12");
  }
});

// Toggle Format Menu
document.getElementById("formatBtn").addEventListener("click", function () {
  const selectMenu = document.getElementById("selectMenu");
  const formatMenu = document.getElementById("formatMenu");

  if (
    !selectMenu.classList.contains("col-span-2") &&
    !formatMenu.classList.contains("hidden")
  ) {
    selectMenu.classList.add("col-span-2");
    formatMenu.classList.add("hidden");

    selectMenu.classList.add("xl:mx-52", "lg:mx-40", "md:mx-28", "sm:mx-12");
    selectMenu.classList.remove("xl:ml-52", "lg:ml-40", "md:ml-28", "sm:ml-12");

    formatMenu.classList.add("xl:mx-52", "lg:mx-40", "md:mx-28", "sm:mx-12");
    formatMenu.classList.remove("xl:mr-52", "lg:mr-40", "md:mr-28", "sm:mr-12");

    document.getElementById("formatBtn").innerText = "Show Formatting";
  } else {
    selectMenu.classList.remove("col-span-2");
    formatMenu.classList.remove("hidden");

    selectMenu.classList.remove("xl:mx-52", "lg:mx-40", "md:mx-28", "sm:mx-12");
    selectMenu.classList.add("xl:ml-52", "lg:ml-40", "md:ml-28", "sm:ml-12");

    formatMenu.classList.remove("xl:mx-52", "lg:mx-40", "md:mx-28", "sm:mx-12");
    formatMenu.classList.add("xl:mr-52", "lg:mr-40", "md:mr-28", "sm:mr-12");

    document.getElementById("formatBtn").innerText = "Hide Formatting";
  }
});

const books = [
  {
    filename: "Genesis.json",
    title: "Genesis",
  },
  {
    filename: "Exodus.json",
    title: "Exodus",
  },
  {
    filename: "Leviticus.json",
    title: "Leviticus",
  },
  {
    filename: "Numbers.json",
    title: "Numbers",
  },
  {
    filename: "Deuteronomy.json",
    title: "Deuteronomy",
  },
  {
    filename: "Joshua.json",
    title: "Joshua",
  },
  {
    filename: "Ruth.json",
    title: "Ruth",
  },
  {
    filename: "Judges.json",
    title: "Judges",
  },
  {
    filename: "1Samuel.json",
    title: "1Samuel",
  },
  {
    filename: "2Samuel.json",
    title: "2Samuel",
  },
  {
    filename: "1Kings.json",
    title: "1 Kings",
  },
  {
    filename: "2Kings.json",
    title: "2 Kings",
  },
  {
    filename: "1Chronicles.json",
    title: "1 Chronicles",
  },
  {
    filename: "2Chronicles.json",
    title: "2 Chronicles",
  },
  {
    filename: "Ezra.json",
    title: "Ezra",
  },
  {
    filename: "Nehemiah.json",
    title: "Nehemiah",
  },
  {
    filename: "Esther.json",
    title: "Esther",
  },
  {
    filename: "Job.json",
    title: "Job",
  },
  {
    filename: "Psalms.json",
    title: "Psalms",
  },
  {
    filename: "Proverbs.json",
    title: "Proverbs",
  },
  {
    filename: "Ecclesiastes.json",
    title: "Ecclesiastes",
  },
  {
    filename: "SongofSolomon.json",
    title: "Song of Solomon",
  },
  {
    filename: "Isaiah.json",
    title: "Isaiah",
  },
  {
    filename: "Jeremiah.json",
    title: "Jeremiah",
  },
  {
    filename: "Lamentations.json",
    title: "Lamentations",
  },
  {
    filename: "Ezekiel.json",
    title: "Ezekiel",
  },
  {
    filename: "Daniel.json",
    title: "Daniel",
  },
  {
    filename: "Hosea.json",
    title: "Hosea",
  },
  {
    filename: "Joel.json",
    title: "Joel",
  },
  {
    filename: "Amos.json",
    title: "Amos",
  },
  {
    filename: "Obadiah.json",
    title: "Obadiah",
  },
  {
    filename: "Jonah.json",
    title: "Jonah",
  },
  {
    filename: "Micah.json",
    title: "Micah",
  },
  {
    filename: "Nahum.json",
    title: "Nahum",
  },
  {
    filename: "Habakkuk.json",
    title: "Habakkuk",
  },
  {
    filename: "Zephaniah.json",
    title: "Zephaniah",
  },
  {
    filename: "Haggai.json",
    title: "Haggai",
  },
  {
    filename: "Zechariah.json",
    title: "Zechariah",
  },
  {
    filename: "Malachi.json",
    title: "Malachi",
  },
  {
    filename: "Matthew.json",
    title: "Matthew",
  },
  {
    filename: "Mark.json",
    title: "Mark",
  },
  {
    filename: "Luke.json",
    title: "Luke",
  },
  {
    filename: "John.json",
    title: "John",
  },
  {
    filename: "Acts.json",
    title: "Acts",
  },
  {
    filename: "Romans.json",
    title: "Romans",
  },
  {
    filename: "1Corinthians.json",
    title: "1 Corinthians",
  },
  {
    filename: "2Corinthians.json",
    title: "2 Corinthians",
  },
  {
    filename: "Galatians.json",
    title: "Galatians",
  },
  {
    filename: "Ephesians.json",
    title: "Ephesians",
  },
  {
    filename: "Philippians.json",
    title: "Philippians",
  },
  {
    filename: "Colossians.json",
    title: "Colossians",
  },
  {
    filename: "1Thessalonians.json",
    title: "1 Thessalonians",
  },
  {
    filename: "2Thessalonians.json",
    title: "2 Thessalonians",
  },
  {
    filename: "1Timothy.json",
    title: "1 Timothy",
  },
  {
    filename: "2Timothy.json",
    title: "2 Timothy",
  },
  {
    filename: "Titus.json",
    title: "Titus",
  },
  {
    filename: "Philemon.json",
    title: "Philemon",
  },
  {
    filename: "Hebrews.json",
    title: "Hebrews",
  },
  {
    filename: "James.json",
    title: "James",
  },
  {
    filename: "1Peter.json",
    title: "1 Peter",
  },
  {
    filename: "2Peter.json",
    title: "2 Peter",
  },
  {
    filename: "1John.json",
    title: "1 John",
  },
  {
    filename: "2John.json",
    title: "2 John",
  },
  {
    filename: "3John.json",
    title: "3 John",
  },
  {
    filename: "Jude.json",
    title: "Jude",
  },
  {
    filename: "Revelation.json",
    title: "Revelation",
  },
];

/**
 * @typedef {{
 *   book: string,
 *   chapters: {
 *     chapter: string,
 *     verses: {
 *       verse: string,
 *       text: string,
 *     }[],
 *   }[],
 * }} Book
 */

/**
 * Loads a book based on its filename (e.g. "Luke.json")
 * @param {string} filename The book filename
 * @returns {Promise<Book>} The book that was read from JSON
 */
async function loadBook(filename) {
  const resp = await fetch("/dist/books/" + filename);

  if (resp.status !== 200) {
    throw new Error("Failed to fetch book, got HTTP status " + resp.status);
  }

  return await resp.json();
}

/**
 * The currently selected book, or null if none
 * @type {Book | null}
 */
let currentBook = null;

const bookSelector = document.getElementById("selectBook");
const chapterSelector = document.getElementById("selectChapter");

/**
 * Loads and displays a book by its filename
 * @param {string} fileName The book's filename (e.g. "James.json")
 */
async function selectBookByFileName(fileName) {
  const book = await loadBook(fileName);

  // Set book title text
  const title = document.getElementById("bookTitle");
  title.innerText = "Book of " + book.book;

  currentBook = book;

  // Clear existing chapters
  chapterSelector.textContent = "";

  // Populate chapters
  for (let i = 0; i < book.chapters.length; i++) {
    const chapter = book.chapters[i];

    const optionChapt = document.createElement("option");

    optionChapt.innerText = chapter.chapter;
    optionChapt.value = i;

    chapterSelector.appendChild(optionChapt);
  }
}

for (let i = 0; i < books.length; i++) {
  const book = books[i];

  const optionElem = document.createElement("option");

  optionElem.innerText = book.title;
  optionElem.value = book.filename;

  bookSelector.appendChild(optionElem);
}

bookSelector.onchange = function () {
  const filename = bookSelector.value;

  selectBookByFileName(filename);
};

chapterSelector.onchange = function () {
  if (currentBook == null) {
    return;
  }

  const container0 = document.getElementById("verseContainer0");
  const container1 = document.getElementById("verseContainer1");

  const chapter = currentBook.chapters[chapterSelector.value];
  const verses = chapter.verses;

  function createElementForVerse(verse) {
    const elem = document.createElement("p");
    elem.classList.add("p-1");
    elem.innerText = verse.verse + ". " + verse.text;

    return elem;
  }

  for (const verse of verses) {
    // Append to both containers
    container0.appendChild(createElementForVerse(verse));
    container1.appendChild(createElementForVerse(verse));
  }
};

// Loads parallel text

// loadParallel(books[41]).then(function (book) {
//   console.log(book);

//   const container = document.getElementById("verseContainer1");

//   const verses = book.chapters[0].verses;
//   for (const verse of verses) {
//     const elem = document.createElement("p");
//     elem.classList.add("p-1");
//     elem.innerText = verse.verse + ". " + verse.text;
//     container.appendChild(elem);
//   }

//   document.getElementById("BookTitleNumber").innerText = "";
// });
