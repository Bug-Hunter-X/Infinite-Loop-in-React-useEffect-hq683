```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correctly using the dependency array to prevent an infinite loop. 
    // The empty dependency array ensures this effect runs only once.
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval); // Cleanup function
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```