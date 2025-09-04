/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        offWhite: "#FFF9F2",
        lightBeige: "#F8F6F2",
        darkCharcoal: "#1A1A1A",
        mutedGray: "#6B6B6B",
        journalBlue: "#DDEBFF",
        moodPeach: "#FFE8C8",
        goalsGreen: "#E4F6E8",
        notesYellow: "#FFF2B5",
        teamChatBlue: "#E6F1FB",
        stickyNotesYellow: "#FFF3C4",
        kudosLavender: "#F2E6FB",
        tagBadgeBlueGray: "#E6EBF0",
        successGreen: "#4CAF50",
        softOrange: "#FFB74D",
        calmBlue: "#64B5F6",
        warmRed: "#E57373"
      }
    }
  },
  plugins: []
};
