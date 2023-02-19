### Books REST API with: Node js, Express js and MongoDB.

#### How to run the app?

```
npm install
```

```
npm run dev
```

#### Libraries used in this project?

- cors
- mongoose
- Joi (schema validation for requests body and params).
- nodemon (dev dependency)

#### The app comes with 5 routes / endpoints:

> Note: The base route is `/books`

- POST / Create a book

    - Route: `/create`

    - Method: POST.

    - Body: 

        ```
            "title": "Here is the book title children",
            "content": "here is the book's content children",
            "author_name": "author name",
            "release_year": "2020",
            "category": ["Children"]
        ```

        > Note: All the previous fields are required. any missing / additional filed will cause an error.

        > Note: the category key is an enum. you can check `config/enums` file.

    - Response: Object of the new created book.

- GET / get or retrieve a single book.

    - Route: `/:id` (example: 63f152d5cd3143092a2f637f)

    - Method: GET.

    - Response: Object of the new correspond book.

- DELETE / delete a single book.

    - Route: `/:id` (example: 63f152d5cd3143092a2f637f)

    - Method: DELETE.

    - Response: success deletion message.

- UPDATE / Create a book

    - Route: `/:id`

    - Method: PUT / PATCH.

    - Body: 
        ```
            "title": "Here is the book title children updated",
            "content": "here is the book's content children updated",
            "author_name": "author name updated",
            "release_year": "2019",
            "category": ["Children", "Fiction", "Crime"]
        ```

        > Note: All the previous fields are optional. any additional filed will cause an error.

        > Note: the category key is an enum. you can check `config/enums` file.

    - Response: Object of the book with the new updated values.

- SEARCH / search for multiple books.

    - Route: `/`

    - Filters: you can search by: 
        
        1- Title by adding: ?title=`value`

        2- Author Name by adding: ?author_name=`value`

        3- Category by adding: ?category=`value` 

                > Note: You can search for many categories example: ?category=`value1|value2|value3`
        
        4- Release Year by adding:
        
            - For minimum year: ?min_year=`value`.

            - For maximum year: ?max_year=`value`.
        
> Note: You can add many filter at once. example: `?category=Crime|Fantasy&author_name=author&strict=true`.

> Note: if you are using many filters. then you can add `&strict=true` to the search url for better search functionality

    - Method: GET.

    - Response: Array of the books that fit the search. 