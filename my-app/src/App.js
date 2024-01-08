import ExpenseItems from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "car insurance",
      amount: 234.67,
      date: new Date(2024, 0, 1),
    },
    {
      title: "bike insurance",
      amount: 3334.67,
      date: new Date(2024, 0, 2),
    },
    {
      title: "eduaction loan",
      amount: 7627823.4343,
      date: new Date(2024, 0, 3),
    },
    {
      title: "shopping",
      amount: 22234.67,
      date: new Date(2024, 0),
    },
  ];

  return (
    <div>
      <h1>Expense Tracker</h1>
      {expenses.map((expense, index) => (
        <ExpenseItems
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default App;
