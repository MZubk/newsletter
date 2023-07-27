const Form = ({ onSubmit }) => {
  const safeSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const name = event.target[0].value;
    const email = event.target[1].value;
    onSubmit({ name, email });
  };

  return (
    <form
      onSubmit={safeSubmit}
      className="h-full flex flex-col items-center justify-center -mt-20 mx-5 gap-8"
    >
      <input
        required
        type="text"
        className="input-alura input-dark"
        placeholder="Insira seu nome..."
      />
      <input
        required
        type="email"
        className="input-alura input-dark"
        placeholder="Insira seu email..."
      />
      <button type="submit" className="button-alura button-dark">
        Seguir
      </button>
    </form>
  );
};

export default Form;
