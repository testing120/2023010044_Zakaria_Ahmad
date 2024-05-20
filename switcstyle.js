let bulan = maret;

switch(bulan.toLowerCase()) {
    case 'desember':
    case 'januari':
    case 'februari':
        console.log("Ini adalah musim dingin.");
        break;
    case 'maret':
    case 'april':
    case 'mei':
        console.log("Ini adalah musim semi.");
        break;
    case 'juni':
    case 'juli':
    case 'agustus':
        console.log("Ini adalah musim panas.");
        break;
    case 'september':
    case 'oktober':
    case 'november':
        console.log("Ini adalah musim gugur.");
        break;
    default:
        console.log("Input tidak valid.");
}
