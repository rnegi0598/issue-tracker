# Issue tracker app

## Tasks
- Home Page
    - Show a list of projects.
    - Give a button to create a new Project (On creating a new project it should appear in the list)
- Create Project Page
    - Accept the following fields to create a project
        - Name/Title
        - Description
        - Author
- Project Detail Page
    - When the user clicks on a project (in home page) redirect the user to this page 
    - User should be able to perform following actions on this page
        - Filter by multiple labels i.e. I should be able to filter by 2 or more labels at the same time
        - Filter by author
        - Search by title and description
    - A button to create an issue
- Create issue page
    - User should be able to create an issue for a project
    - Accept the following fields
        - Title
        - Description
        - Labels (multiple labels can be added to a project, IF a project has a label already show it (in dropdown) as the user types the label in)
        - Author
## implementation
[autocomplete](https://codepen.io/Ravi91976346/pen/yLGNoNN)
## Design
![ui filter and issue display](https://cdn.dribbble.com/users/17473/screenshots/3861209/attachments/875598/tsr-dribbble-shot-big.jpg)
## labels 
autocomplete

- Bug: For issues related to bugs or unexpected behavior in the code.
- Feature Request: For suggesting new features or enhancements to existing features.
- Documentation: For issues related to documentation improvements or clarifications.
- Enhancement: For non-bug-related improvements to the codebase.
- Help Wanted: To indicate that the issue is open for community contributions.
- Good First Issue: To highlight issues that are suitable for newcomers to start contributing.
- Invalid: To mark issues that are not valid or relevant.
- Question: For questions and discussions rather than actionable tasks.
- Duplicate: To indicate that the issue is a duplicate of another existing issue.
- Wontfix: To indicate that the issue will not be addressed.
- Blocked: To indicate that the issue is blocked by another issue or dependency.
