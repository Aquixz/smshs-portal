function generateRegistrationPDF() {
    // 1. Fill the PDF labels with stored data
    document.getElementById('p_psa').innerText = localStorage.getItem('psa_no') || 'N/A';
    document.getElementById('p_lrn').innerText = localStorage.getItem('lrn') || 'N/A';
    
    // Combine First, Middle, and Last Name
    const fname = localStorage.getItem('first_name') || '';
    const lname = localStorage.getItem('last_name') || '';
    document.getElementById('p_name').innerText = lname + ", " + fname;

    document.getElementById('p_bday').innerText = localStorage.getItem('birthdate') || 'N/A';
    document.getElementById('p_sex').innerText = localStorage.getItem('sex') || 'N/A';

    // Address
    const house = localStorage.getItem('house_no') || '';
    const street = localStorage.getItem('street_name') || '';
    const brgy = localStorage.getItem('barangay') || '';
    const city = localStorage.getItem('city') || '';
    document.getElementById('p_address').innerText = `${house} ${street}, ${brgy}, ${city}`;

    // Parents & Enrollment
    document.getElementById('p_father').innerText = localStorage.getItem('father_first') + " " + localStorage.getItem('father_last');
    document.getElementById('p_mother').innerText = localStorage.getItem('mother_first') + " " + localStorage.getItem('mother_last');
    document.getElementById('p_track').innerText = localStorage.getItem('shs_track') || 'N/A';
    document.getElementById('p_strand').innerText = localStorage.getItem('shs_strand') || 'N/A';
    document.getElementById('p_guardian').innerText = localStorage.getItem('parent_printed_name') || '';

    // 2. PDF Export Settings
    const element = document.getElementById('registration-form-pdf');
    element.style.display = 'block'; // Make it visible briefly for the capture

    const options = {
        margin: 0.5,
        filename: 'SMSHS_Registration_' + lname + '.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // 3. Generate and Save
    html2pdf().set(options).from(element).save().then(() => {
        element.style.display = 'none'; // Hide it again
    });
}