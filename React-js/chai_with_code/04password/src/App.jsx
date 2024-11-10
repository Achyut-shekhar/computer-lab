import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  //for length of password
  const [length, setlength] = useState(5);
  const [NumberAllowed, setNumberAllowed] = useState(false);
  const [CharacterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  //password generator
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghiklmnopqestuvwxyz";
    if (NumberAllowed) str += "0123456789";
    if (CharacterAllowed) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, NumberAllowed, CharacterAllowed, setPassword]);

  //function for copy function
  const copy_to_clipboard = useCallback(() => {
    passwordRef.current?.select();

    // passwordRef.current?.setSelectionRange(0,6)
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //useeffect
  useEffect(() => {
    passwordGenerator();
  }, [length, NumberAllowed, CharacterAllowed]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-blue-400 bg-gray-800 ">
        <h1 className="text-white text-center font-bold mb-4">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden  ">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3  "
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copy_to_clipboard}
            className="outline-none bg-blue-600  "
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 mt-3">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={NumberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={NumberAllowed}
              id="numberInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
