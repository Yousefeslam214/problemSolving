function groupAnagrams(strs: string[]): string[][] {
    // Step 1: Create a map to store groups of anagrams
    const map: Map<string, string[]> = new Map();

    // Step 2: Populate the map with anagrams grouped by their sorted versions
    for (let str of strs) {
        // Sort the current string to get its sorted version
        const sortedStr = rearrangeWord(str);
        
        // Check if the sorted version already exists in the map
        if (map.has(sortedStr)) {
            // If yes, push the current string to its corresponding group
            map.get(sortedStr)!.push(str);
        } else {
            // If no, create a new group with the sorted version as key
            map.set(sortedStr, [str]);
        }
    }

    // Step 3: Convert the map values to an array of arrays (to match the desired output format)
    const groupedAnagrams: string[][] = Array.from(map.values());

    // Step 4: Sort the grouped arrays by their first element (optional, for consistent output order)
    groupedAnagrams.sort((a, b) => a[0].localeCompare(b[0]));

    // Step 5: Output the grouped anagrams
    console.log(groupedAnagrams);

    return groupedAnagrams;
}

// Helper function to rearrange characters of a string into alphabetical order
function rearrangeWord(word: string): string {
    return word.split('').sort().join('');
}

// Example usage:
const inputStrings = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
const grouped = groupAnagrams(inputStrings);
console.log("Output:", grouped);
