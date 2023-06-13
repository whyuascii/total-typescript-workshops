interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}
// Just needed to wrap the return type in a Promise
export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
    // alternative is to const data: LukeSkywalker and there is no need to return type
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });
// lastly we can cast a type to that data but I really hate that solution unless we really need to
  return data;
};
