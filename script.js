"use strict";

let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById("selector");
const amountInput = document.getElementById("amount");
const dateInput = document.getElementById("date");
const addBtn = document.getElementById("add-btn");
const expensesTableBody = document.getElementById("expense-table");
const totalAmountCell = document.getElementById("total-number");

addBtn.addEventListener("click", function () {
  const category = categorySelect.value;
  const amount = Number(amountInput.value);
  const date = dateInput.value;

  if (category === "") {
    alert("Please select a category");
    return;
  }
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }
  if (date === "") {
    alert("Please select a date");
    return;
  }

  const expense = { category, amount, date };
  expenses.push(expense);

  totalAmount += amount;
  totalAmountCell.textContent = totalAmount;

  const newRow = expensesTableBody.insertRow();

  const categoryCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  categoryCell.textContent = expense.category;
  amountCell.textContent = expense.amount;
  dateCell.textContent = expense.date;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function () {
    expenses.splice(expenses.indexOf(expense), 1);
    totalAmount -= expense.amount;
    totalAmountCell.textContent = totalAmount;
    expensesTableBody.removeChild(newRow);
  });

  deleteCell.appendChild(deleteBtn);

  // Clear inputs
  amountInput.value = "";
  dateInput.value = "";
});
