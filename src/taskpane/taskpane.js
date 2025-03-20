// This file contains the JavaScript code for the task pane. It initializes the Office Add-In, handles user interactions, and communicates with the Office host application.

Office.onReady((info) => {
    // Office is ready
    if (info.host === Office.HostType.Excel) {
        document.getElementById("run").onclick = run;
    }
});

async function run() {
    await Excel.run(async (context) => {
        const range = context.workbook.getSelectedRange();
        range.format.fill.color = "yellow";
        range.values = [["Hello World!"]];
        await context.sync();
    });
}