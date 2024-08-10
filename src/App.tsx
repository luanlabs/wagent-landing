import Button from './components/Button';

function App() {
  return (
    <>
      <h1>Wagent landing</h1>
      <div className="w-full flex space-x-3 p-3">
        <Button variant="bordered" text="Launch App" />
        <Button variant="simpleWhite" text="Learn more" />
        <Button variant="simpleDark" text="Launch app" />
        <Button variant="simpleGreen" text="Our Team" />
        <Button variant="basicBlack" text="Request Access" />
      </div>
    </>
  );
}

export default App;
