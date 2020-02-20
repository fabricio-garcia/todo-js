/**
 * Zero Treat Level notification
 * [VIEW]: template intended for HTML
 * [NOTIFICATION]: To show internal information
 * @param {String} message Text to show to user
 * @return {String} HTML ready with info of book
 */
const noticeT = (message) => `
<div class="notice" id="notice">
    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
    <p><b>Look!:</b> ${message}!</p>
</div>
`;

/**
 * Medium Treat Level notification
 * [VIEW]: template intended for HTML
 * [NOTIFICATION]: To show internal information
 * @param {String} error description of problem
 */
const alertT = (error) => `
<div class="alert" id="alert">
    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
    <p><b>Aware!:</b> ${error}</p>
</div>
`;

/**
 * High Treat Level notification
 * [VIEW]: template intended for HTML
 * [NOTIFICATION]: To show internal information
 * @param {String} caution Text to show to user
 * @return {String} HTML ready with info of book
 */
const warningT = (caution) => `
<div class="warning" id="warning">
    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
    <p><b>Warning!:</b> ${caution}!</p>
</div>
`;
