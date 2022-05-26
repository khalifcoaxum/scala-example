/* The purpose of this exercise is to evaluate your design, implementation, and usability skills using React and other web-based technologies.   

Using the supplied JSON string, please create an application using React to display and manipulate a tree representation of the data.  
The tree should be a reusable component which contains all of its functionality and can be displayed multiple times on a page using different styles.  The tree’s functionality should include:
    • collapse/expand a node
    • add a node
    • move a node (optional)
    • delete a node
    • update the contents of a node
 */

export const Data = [
  {
    id: 0,
    name: "Root",
    children: [
      {
        id: 1,
        name: "WG1",
        children: [
          {
            id: 5,
            name: "WG11",
          },
          {
            id: 6,
            name: "WG12",
            children: [
              {
                id: 7,
                name: "WG121",
              },
              {
                id: 8,
                name: "WG122",
                children: [
                  {
                    id: 9,
                    name: "WG1221",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "WG2",
        children: [
          {
            id: 10,
            name: "WG21",
            children: [
              {
                id: 11,
                name: "WG211",
              },
              {
                id: 12,
                name: "WG212",
                children: [
                  {
                    id: 13,
                    name: "WG2121",
                  },
                  {
                    id: 14,
                    name: "WG2122",
                    children: [
                      {
                        id: 15,
                        name: "WG21221",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 16,
            name: "WG22",
          },
          {
            id: 17,
            name: "WG23",
          },
        ],
      },
      {
        id: 3,
        name: "WG3",
      },
      {
        id: 4,
        name: "WG4",
        children: [
          {
            id: 18,
            name: "WG41",
            children: [
              {
                id: 19,
                name: "WG411",
              },
              {
                id: 20,
                name: "WG412",
                children: [
                  {
                    id: 21,
                    name: "WG4121",
                  },
                  {
                    id: 22,
                    name: "WG4122",
                    children: [
                      {
                        id: 23,
                        name: "WG41221",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 24,
            name: "WG42",
            children: [
              {
                id: 25,
                name: "WG421",
                children: [
                  {
                    id: 26,
                    name: "WG4211",
                  },
                  {
                    id: 27,
                    name: "WG4212",
                    children: [
                      {
                        id: 28,
                        name: "WG42121",
                      },
                    ],
                  },
                ],
              },
              {
                id: 29,
                name: "WG422",
                children: [
                  {
                    id: 30,
                    name: "WG4221",
                  },
                  {
                    id: 31,
                    name: "WG4222",
                    children: [
                      {
                        id: 32,
                        name: "WG42221",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default Data