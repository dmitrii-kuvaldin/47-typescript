import ForceUsers from '../../components/forceUsers/ForceUsers';

function Lesson05() {
  return (
    <div className={"lesson-container"}>
      <h2>Lesson 5. map() components</h2>
      {/* используйте необязательный параметр index для передачи при итерации с key props */}
      <ForceUsers />

    </div>
  );
}

export default Lesson05;
