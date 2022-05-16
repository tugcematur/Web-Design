import {React, useState} from 'react';
import axios  from "axios";

export default function Books2() {
const [bookList,setBookList] = useState([])

    return (
        <div>
            <table>
             <thead>
                 <tr>
                     <th>Id</th>
                     <th>Image</th>
                     <th>Name</th>
                     <th>Author</th>
                     <th>About</th>
                     <th>Action</th>
                 </tr>
             </thead>
             <tbody>
                {bookList.map}
             </tbody>
            </table>
        </div>

    )


    function GetBooks() {

        axios
          .get("https://api-bookseller.herokuapp.com/books") // api yi yazıyoruz
          .then((response) => {
            setBookList(response.data)// okunan veriyi books un içine atıyor 
          });
      }

}
