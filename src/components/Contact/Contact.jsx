import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { FaUser, FaPhone } from "react-icons/fa";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div className={css.item}>
      <div className={css.contactInfo}>
        <p className={css.name}>
          <FaUser size={18} />
          {name}
        </p>
        <p className={css.number}>
          <FaPhone size={18} />
          {number}
        </p>
      </div>
      <button
        className={css.deleteBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
}
