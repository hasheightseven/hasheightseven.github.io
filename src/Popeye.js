console.log('ello from popeye.js');

import popeye from "./popeye.svg";

function Popeye() {
    return (
        <div class="Popeye-div">
            <img src={popeye} alt="popeye"/>
        </div>
    );
}
export default Popeye;