const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
bands.sort((a,b) => (strip(a) > strip(b) ? 1:-1))
function strip(bandName) {
    return bandName.replace(/^(a|an|the)\s/i,'').trim();
}
let list = '';
document.querySelector('#bands').innerHTML = bands.map(band => list += `<li>${band}</li>`).join('');
// bandList.innerHTML = bands.reduce(
//     (s, band) => s + `<li>${band}</li>`, 
//     '');
// console.log(list)
