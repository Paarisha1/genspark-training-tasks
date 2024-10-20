(function() {
    interface Flight {
        flightNumber: string;
        from: string;
        to: string;
        price: number;
    }

    const availableFlights: Flight[] = [
        { flightNumber: 'AI101', from: 'Mumbai', to: 'Delhi', price: 5000 },
        { flightNumber: 'AI102', from: 'Delhi', to: 'Bangalore', price: 6000 },
        { flightNumber: 'AI103', from: 'Kolkata', to: 'Chennai', price: 4500 },
        { flightNumber: 'AI104', from: 'Hyderabad', to: 'Mumbai', price: 5500 },
        { flightNumber: 'AI105', from: 'Pune', to: 'Jaipur', price: 4800 }
    ];

    const getEl = <T extends HTMLElement>(id: string): T => document.getElementById(id) as T;

    function renderFlights(): void {
        const flightList = getEl<HTMLUListElement>('flights');
        const flightSelect = getEl<HTMLSelectElement>('flightSelect');

        flightList.innerHTML = flightSelect.innerHTML = '';
        availableFlights.forEach(({ flightNumber, from, to, price }) => {
            flightList.innerHTML += `<li>${flightNumber} from ${from} to ${to} (₹${price})</li>`;
            flightSelect.innerHTML += `<option value="${flightNumber}">${flightNumber} - ${from} to ${to}</option>`;
        });
    }

    function bookFlight(flightNumber: string): void {
        const flight = availableFlights.find(f => f.flightNumber === flightNumber);
        const confirmation = getEl<HTMLParagraphElement>('confirmationMessage');
        flight 
            ? confirmation.textContent = `Flight ${flight.flightNumber} from ${flight.from} to ${flight.to} successfully booked for ₹${flight.price}.`
            : alert('Flight not found.');
        getEl('confirmation').style.display = flight ? 'block' : 'none';
    }

    function addFlight(flightNumber: string, from: string, to: string, price: number): void {
        availableFlights.push({ flightNumber, from, to, price });
        renderFlights();
    }

    function removeFlight(flightNumber: string): void {
        const index = availableFlights.findIndex(f => f.flightNumber === flightNumber);
        index !== -1 ? availableFlights.splice(index, 1) : alert('Flight not found.');
        renderFlights();
    }

    getEl('flightBookingForm')?.addEventListener('submit', e => {
        e.preventDefault();
        bookFlight(getEl<HTMLSelectElement>('flightSelect').value);
    });

    getEl('newFlightForm')?.addEventListener('submit', e => {
        e.preventDefault();
        addFlight(
            getEl<HTMLInputElement>('newFlightNumber').value,
            getEl<HTMLInputElement>('newFrom').value,
            getEl<HTMLInputElement>('newTo').value,
            parseFloat(getEl<HTMLInputElement>('newPrice').value)
        );
    });

    getEl('flightRemoveForm')?.addEventListener('submit', e => {
        e.preventDefault();
        removeFlight(getEl<HTMLInputElement>('removeFlightNumber').value);
    });

    renderFlights();
})();
