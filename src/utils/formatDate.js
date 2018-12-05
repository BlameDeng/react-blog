export default function formatDate(dateStr, type) {
    let dateObj
    if (typeof dateStr === 'object') {
        dateObj = dateStr
    } else { dateObj = new Date(dateStr) }
    if (type === 'full') {
        let year = dateObj.getFullYear()
        let month = dateObj.getMonth() + 1
        let date = dateObj.getDate()
        return { year, month, date }
    }
    let time = dateObj.getTime()
    let now = Date.now()
    let space = now - time
    if (space < 60 * 1000) { return '刚刚' }
    if (space < 60 * 60 * 1000) { return Math.floor(space / 60000) + '分钟前' }
    if (space < 24 * 60 * 60 * 1000) { return Math.floor(space / (60 * 60 * 1000)) + '小时前' } else { return Math.floor(space / (24 * 60 * 60 * 1000)) + '天前' }
}