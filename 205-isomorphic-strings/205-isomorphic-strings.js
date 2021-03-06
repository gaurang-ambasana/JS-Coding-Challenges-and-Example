/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
    const hash1 = {}, hash2 = {};
    
    for (let i = 0; i < s.length; i++) {
        const c1 = s[i], c2 = t[i];
        
        if (!hash2[c2] && !hash1[c1])
            [hash1[c1], hash2[c2]] = [c2, c1];
        else if (hash1[c1] !== c2 || hash2[c2] !== c1)
            return false;
    }
    
    return true;
}