import formatTodosForAI from "./formatTodosForAI";

const fetchSuggestion = async (board: Board) => {
  try {
    const todos = formatTodosForAI(board);
    console.log("Formatted todo message", todos);

    const res = await fetch("/api/generateSummary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todos }),
    });

    const GPTdata = await res.json();
    const { content } = GPTdata;
    return content;
  } catch (error) {
    return "I'm Sorry! Chat Gpt Request Limit Reached.";
  }
};

export default fetchSuggestion;
