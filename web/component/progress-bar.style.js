export const progressBar = {
    backgroundImage: 'url("http://localhost:8080/progress-bar.png")',
    width: '100px',
    height: '20px',
    backgroundRepeat: 'no-repeat',
    border: '1px solid'
}

export default function getProgressBarStyle(percentage) {
    return {
        ...progressBar,
        backgroundSize: 100 * percentage / 100 + 'px 20px'
    }
}