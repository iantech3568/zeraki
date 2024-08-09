// Import mock data
import { users, students, messages, attendanceRecords, results, supportTickets } from './data.js';

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        document.getElementById('loginMessage').textContent = `Welcome, ${user.role}`;
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid login credentials';
    }
});

// Handle attendance form submission
document.getElementById('attendanceForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const studentName = document.getElementById('studentName').value;
    const attendanceStatus = document.getElementById('attendanceStatus').value;

    attendanceRecords.push({ studentName, attendanceStatus, date: new Date().toLocaleDateString() });

    document.getElementById('attendanceMessage').textContent = `Attendance recorded for ${studentName}`;
});

// Handle messaging form submission
document.getElementById('messageForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const recipient = document.getElementById('recipient').value;
    const message = document.getElementById('message').value;

    messages.push({ recipient, message, date: new Date().toLocaleDateString() });

    document.getElementById('messageSent').textContent = 'Message sent';
});

// Handle results form submission
document.getElementById('resultsForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const studentResultName = document.getElementById('studentResultName').value;
    const subject = document.getElementById('subject').value;
    const grade = document.getElementById('grade').value;

    results.push({ studentResultName, subject, grade });

    document.getElementById('resultMessage').textContent = 'Result recorded';
});

// Generate report
document.getElementById('generateReport').addEventListener('click', function () {
    let report = 'Student Performance Report:\n\n';

    results.forEach(result => {
        report += `Student: ${result.studentResultName}, Subject: ${result.subject}, Grade: ${result.grade}\n`;
    });

    document.getElementById('reportOutput').textContent = report;
});

// Handle support form submission
document.getElementById('supportForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const supportMessage = document.getElementById('supportMessage').value;

    supportTickets.push({ message: supportMessage, date: new Date().toLocaleDateString() });

    document.getElementById('supportResponse').textContent = 'Support ticket submitted';
});
