import { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";

type Pet = {
    _id: string;
    name: string;
    age: number;
    type: string;
    owner: string;
};
  

export default function AnalyticsScreen() {
    const router = useRouter();
    const [pets, setPets] = useState<Pet[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/pets')
            .then((response) => response.json()
            .then((data) => {
                console.log(data)
                setPets(data)
            })
            .catch((e) => {
                console.log(e.message)
            })
        )
    }, [])

    return (
        <View style={styles.container}>
            {pets.map((pet) => {
                return (
                    <div className="pet-card" key={pet._id}>
                        <h2 className="pet-name">{pet.name}</h2>
                        <p>{pet.age}</p>
                        <p>{pet.owner}</p>
                    </div>
                )
            })}
        </View>
    );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
});
