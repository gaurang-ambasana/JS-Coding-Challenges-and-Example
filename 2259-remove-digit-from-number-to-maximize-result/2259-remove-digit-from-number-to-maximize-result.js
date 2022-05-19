/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
const removeDigit = (number, digit) => {
    let max = '0';
    
    for (const i in number) {
        const n = number[i];
        const temp = [...number];
        
        if (n === digit) {
            temp.splice(i, 1);
            
            const curr = temp.join('');
            
            if (curr > max) max = curr;
        }
    }
    
    return max;
}