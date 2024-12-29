# Group Anagrams

This README explains the approach to solve the "Group Anagrams" problem, where the task is to group a list of strings such that all anagrams are in the same group. Two words are anagrams if one can be rearranged to form the other, meaning they have the same characters in the same frequency.

---

## Problem Statement

Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

### Example:

**Input:**

```plaintext
["eat", "tea", "tan", "ate", "nat", "bat"]
```

**Output:**

```plaintext
[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
```

---

## Approach

### 1. Sort the characters of each string:

The key observation is that anagrams, when sorted alphabetically, become identical. For example:

- `"eat"`, `"tea"`, and `"ate"` all become `"aet"` when sorted.
- Use the sorted string as a key in a hash map (dictionary).

### 2. Use a hash map (dictionary) to group anagrams:

- Create a dictionary where the key is the sorted string and the value is a list of words (anagrams) that match that key.

### 3. Iterate through the list of words:

- For each word, sort its characters.
- Check if the sorted word is already a key in the dictionary.
  - If yes, append the word to the list corresponding to that key.
  - If no, create a new key with the sorted word and initialize a new list containing the word.

### 4. Return the grouped anagrams:

- After processing all words, the values in the dictionary will represent the grouped anagrams.

---

## Implementation

### Python Code:

```python
from collections import defaultdict

def group_anagrams(strs):
    # Initialize a dictionary to store grouped anagrams
    anagrams = defaultdict(list)

    # Process each word in the input list
    for word in strs:
        # Sort the word and use it as a key
        sorted_word = ''.join(sorted(word))
        anagrams[sorted_word].append(word)

    # Return the grouped anagrams as a list of lists
    return list(anagrams.values())

# Example usage
input_words = ["eat", "tea", "tan", "ate", "nat", "bat"]
output = group_anagrams(input_words)
print(output)  # Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
```

---

## Time Complexity

1. **Sorting each string:** Sorting a string of length \( K \) takes \( O(K \log K) \).
2. **Processing all strings:** For \( N \) strings, the total time complexity is \( O(N \cdot K \log K) \), where \( K \) is the average length of the strings.

---

## Space Complexity

1. **Hash map:** The dictionary stores \( N \) keys (one for each unique sorted string) and the corresponding lists of strings.
2. **Overall space complexity:** \( O(N \cdot K) \).

---

## Example Walkthrough

### Input:

```plaintext
["eat", "tea", "tan", "ate", "nat", "bat"]
```

### Step-by-Step:

1. **Sort each word:**

   - `"eat"` -> `"aet"`
   - `"tea"` -> `"aet"`
   - `"tan"` -> `"ant"`
   - `"ate"` -> `"aet"`
   - `"nat"` -> `"ant"`
   - `"bat"` -> `"abt"`

2. **Group by sorted string:**

   ```plaintext
   {
       "aet": ["eat", "tea", "ate"],
       "ant": ["tan", "nat"],
       "abt": ["bat"]
   }
   ```

3. **Return the grouped anagrams:**
   ```plaintext
   [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
   ```

---

## Conclusion

This approach efficiently groups anagrams using sorting and a hash map. It works well for small and medium-sized inputs and is a common interview problem in technical assessments.
