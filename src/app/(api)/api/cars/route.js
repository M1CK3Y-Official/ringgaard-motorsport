import { getCars, createCar } from '@/services/data.service';

export async function GET(req) {
  try {
    const cars = await getCars();
    return new Response(JSON.stringify(cars), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response('Error fetching cars', { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    console.log("Received data:", data);

    if (!data.name) {
      return new Response(JSON.stringify({ error: "Name is required" }), { status: 400 });
    }

    const newCar = await createCar(data);
    return new Response(JSON.stringify(newCar), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error creating car", details: error.message }), { status: 500 });
  }
}