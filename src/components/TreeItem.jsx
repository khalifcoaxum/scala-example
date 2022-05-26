import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const TreeItem = ({ data }) => {
    const [open, setOpen] = useState(false);

  return data.map((item, index) => {
    return (
      <div key={`${index}-${item.name}`} className='item-children'>
        <div className='name'>{item.name}
        {item.children && (open ? (
                <FontAwesomeIcon
                  icon={faMinus}
                  onClick={() => setOpen(false)}
                />
              ) : (
                <FontAwesomeIcon icon={faPlus} onClick={() => setOpen(true)} />
              ))}
              </div>
        {open && item.children && <TreeItem data={item.children} />}
      </div>
    );
  });
};

export default TreeItem;
