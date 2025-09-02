import React, { createContext, useState, useEffect } from "react";

export const CalculatorContext = createContext();

export function CalculatorProvider({ children }) {
  const [history, setHistory] = useState([]);
  const historyStorageKey = "history";

  useEffect(() => {
    const savedHistory = localStorage.getItem(historyStorageKey);
    setHistory(JSON.parse(savedHistory || "[]"));
  }, []);

  function updateHistory(operation, parsedResult) {
    setHistory((prev) => {
      const updatedHistory = [...prev, `${operation}=${parsedResult}`];
      localStorage.setItem(historyStorageKey, JSON.stringify(updatedHistory));
      return updatedHistory;
    });
  }

  return (
    <CalculatorContext.Provider value={{ history, updateHistory }}>
      {children}
    </CalculatorContext.Provider>
  );
}
