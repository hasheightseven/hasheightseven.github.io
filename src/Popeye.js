import popeye from "./popeye.svg";

function Popeye() {
    return (
        <div class="Popeye-div">
            <img src={popeye} alt="popeye"/>
            <input id="popeye-name-input" />
            <label>name ?</label>
        </div>
    );
}
export default Popeye;
