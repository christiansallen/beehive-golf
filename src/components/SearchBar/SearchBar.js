import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  // Add state variables and event handlers for the form inputs here
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  const localDate = new Date(year, month, day);
  const formattedDate = localDate.toISOString().substring(0, 10);

  return (
    <Form className={styles["form-container"]} inline="true">
      <FormGroup className={styles["form-group"]}>
        <Label for="location" className={styles["form-label"]}>
          Location
        </Label>
        <Input
          className={styles["form-input"]}
          type="text"
          name="location"
          id="location"
          placeholder="Search by location..."
        />
      </FormGroup>
      <FormGroup className={styles["form-group"]}>
        <Label for="date" className={styles["form-label"]}>
          Date
        </Label>
        <Input
          type="date"
          name="date"
          id="date"
          defaultValue={formattedDate}
          className={styles["form-input"]}
        />{" "}
      </FormGroup>
      <FormGroup className={styles["form-group"]}>
        <Label for="players" className={styles["form-label"]}>
          Players
        </Label>
        <Input
          type="select"
          name="players"
          id="players"
          className={styles["form-input"]}
        >
          <option value="any">Any</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </Input>
      </FormGroup>
      <FormGroup className={styles["form-group"]}>
        <Label for="holes" className={styles["form-label"]}>
          Holes
        </Label>
        <Input
          type="select"
          name="holes"
          id="holes"
          className={styles["form-input"]}
        >
          <option value="any">Any</option>
          <option value="9">9</option>
          <option value="18">18</option>
        </Input>
      </FormGroup>
      <FormGroup className={styles["form-button"]}>
        <Button>Search</Button>
      </FormGroup>
    </Form>
  );
};
