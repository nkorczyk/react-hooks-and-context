import React, { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

// class BookList extends Component {
//   static contextType = ThemeContext;
//
//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//
//     return (
//       <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
//         <ul>
//           <li style={{ background: theme.ui}}>the way of kings</li>
//           <li style={{ background: theme.ui}}>the name of the wind</li>
//           <li style={{ background: theme.ui}}>the final empire</li>
//         </ul>
//       </div>
//     );
//   }
// }

// using useContext hook
const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);

  const theme = isLightTheme ? light : dark;
  console.log(books);
  return (
    <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
      <ul>
        {/*<li style={{ background: theme.ui }}>the way of kings</li>*/}
        {/*<li style={{ background: theme.ui }}>the name of the wind</li>*/}
        {/*<li style={{ background: theme.ui }}>the final empire</li>*/}
        {books.map(book => (
          <li key={book.id} style={{ background: theme.ui }}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
