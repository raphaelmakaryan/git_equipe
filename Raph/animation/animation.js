const isDarkMode = window.matchMedia('(prefers-color:dark)').matches;

if (isDarkMode) {
    document.documentElement.style.setProperty('--white', '#540df4');
    document.documentElement.style.setProperty('--black', '#634040');
}