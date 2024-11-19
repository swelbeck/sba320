# **SBA 320: Book Haven**

**Book Haven** is a React-based web application that allows users to explore books, search by title, and filter by genres. It provides a seamless interface for discovering new books and learning more about them through a popup window with detailed information.

## **Features**
- **Search for Books**: Search for books by keywords to find specific titles or authors.
- **Filter by Genre**: Select a genre from a dropdown menu to filter books by category.
- **Book Details Popup**: View detailed information about a book, including its title, authors, description, genre, and more, in an interactive popup.


## **Technologies Used**
- **Front-End**: React
- **Google Books API**: For fetching book details
- **CSS**: For styling


## **How to Run the Project**
1. Clone the repository
2. Navigate to the project directory
3. Install dependencies
4. Start the development server
5. Use your browser to navigate to the host site

## **Usage**
1. Use the search bar to look for specific books by title or keywords.
2. Select a genre from the dropdown to filter books.
3. Click the **"Learn More"** button under a book to open a popup window with detailed information.
4. Close the popup by clicking the "Close" button or outside the popup content area.

## **API Integration**
- **Google Books API**:
  - Used to fetch books based on genres and search terms.
  - API endpoints include:
    - `/volumes?q=subject:<genre>`
    - `/volumes?q=<searchTerm>`
    - `/volumes?q=subject:<genre>+<searchTerm>`

## **Future Enhancements**
- Add user authentication for personalized book recommendations.
- Enable users to save favorite books or create reading lists.
- Integrate additional book APIs, such as Open Library, for more robust data.
- Add community features like book reviews or discussions.


## **Credits**
- **API**: Google Books API

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


