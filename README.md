# Tasks

## Toggle

### Functionality

There's a Toggle component that manages it's own state, and is used twice in App. The two instances of toggle are independent, and therefore not linked. Refactor the codebase so that the Toggle components are linked (i.e. they should mirror each others state).

Hint: Moving up the state might help two sibling components talk to each other through a parent

Bonus: If component doesn't need to be a class, it can be refactored to a functional component

### CSS Modules

Change the toggle styles to use the CSS Modules pattern rather than importing plain old global CSS.

## Inputs

### Generalise

The state is managed in the Inputs component through the handle functions. There is similarity between all of these. Generalise this functionality so that there is a shared function to achieve changing the state through input field entries.
