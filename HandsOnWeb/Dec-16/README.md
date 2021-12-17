Dec-16

1. CSS Specificity.

-> In case of same property being defined at multiple places for same element, which value will be applied. Specificity helps to decide that.
-> Priority of which style is going to be applied.

DEFAULT:
1. Inline has the highest priority.
2. For the same selector level, whatever is written after is considered as higher priority.
3. For different selector levels:
    3.1 Universal selector has the lower priority (lowest specificity)
    3.2 Type (Tag) Selector has comparatively higher priority. (Higher specificity).
    3.3 Class selector has comparatively higher priority. (Higher Specificity).
    3.4 ID selector has highest priority. (Highest specificity).

    Universal < Type < Class < ID

Exception -> "!important" -> Override the default rule and make this property highest priority. If in a situation we have multiple properties having important applied. Then we will fallback to the speicificity rule to find which is more important "among us".


2. Some DSA questions to be solved using JS.

Assignment -> Fix bug on Question 2.