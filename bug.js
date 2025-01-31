```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the count state is updated 
    // inside the useEffect function, triggering a re-render and another 
    // useEffect call.
    setCount(count + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```