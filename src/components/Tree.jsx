import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
require("./Tree.scss");

export const Tree = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [obj, setObj] = useState(data);
  const [val, setVal] = useState("");

  const treeClass = classNames({
    "item closed": !open,
    "item open": open,
  });

  useEffect(() => {}, [obj, val]);

  const addItem = (item) => {
    let val = document.getElementById(item.name).value;

    if (val === "") {
      alert("Enter valid input, cannot be empty");
      return false;
    }

    setVal(val);

    if (!item.children) {
      let child = { name: val };
      item.children = [child];
      setObj(item, ...obj);
      return;
    }

    const itemObj = { id: item.children.length + 1, name: val };
    item.children.push(itemObj);
    setObj(item, ...data);
  };

  const deleteItem = (item) => {
    const index = obj.indexOf(item);
    const delItem = data.splice(index, 1);

    setObj(delItem, ...data);
  };

  const updateItem = (item) => {
    let val = document.getElementById(item.name).value;
    if (val === "") {
      alert("Enter valid input, cannot be empty");
      return false;
    }
    setVal(val);

    const name = (item.name = val);
    setObj(name, ...data);
  };

  return (
    <div className='wrapper'>
      <div className='container'>
        {data &&
          data.map((item, index) => (
            <div key={`${item.name}-${index}`}>
              <div className={treeClass}>
                {item.name}
                {item.children &&
                  (open ? (
                    <FontAwesomeIcon
                      icon={faMinus}
                      onClick={() => setOpen(false)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faPlus}
                      onClick={() => setOpen(true)}
                    />
                  ))}
                <div className='buttonWrapper'>
                  <button className='add' onClick={() => addItem(item)}>
                    Add
                  </button>
                  <button className='delete' onClick={() => deleteItem(item)}>
                    Delete
                  </button>
                  <button className='update' onClick={() => updateItem(item)}>
                    Update
                  </button>
                  <input
                    name='inputField'
                    type='text'
                    maxLength='9'
                    id={item.name}
                    style={{ height: "5%" }}
                  />
                </div>
              </div>
              {open &&
                item.children &&
                item.children.map((child, index) => {
                  return (
                    <div
                      className='item-children'
                      key={`${index}-${item.name}`}
                    >
                      <Tree data={[child]} />
                    </div>
                  );
                })}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tree;
