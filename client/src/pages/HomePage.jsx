import Button from "../components/common/Button";
const HomePage = () => {
    return (<div className="flex justify-end">
      <Button children="Click me" onClick={() => console.log("clicked")}/>
      </div>);
};
export default HomePage;
