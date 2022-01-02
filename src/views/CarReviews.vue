<template>
	<div class="car-reviews">
        <div>Car Reviews</div>
        <div v-if='data.length > 0'>
            {{ data[0].title }}
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase'

	export default {
		name: 'CarReviews',
        data() {
            return {
                data: []
            }
        },
        async created() {
            const db = firebase.firestore().collection('articles')

            try {
                db.get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        if(doc.data()) {
                            console.log(doc.data())
                            this.data.push(doc.data())
                        }
                    })
                })
            } catch(err) {
                console.log(err)
            }
        }
	};
</script>
