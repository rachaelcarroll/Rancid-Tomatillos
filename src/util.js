export const formatOverview = (overview) => {
    if (overview.length > 185) {
        const shortOverview = overview.slice(0, 185) + '...';
        return shortOverview;
    } else {
        return overview;
    }
}

export const formatGenres = (genres) => {
    if(genres) {
        const allGenres = genres.join(' | ')
        return allGenres 
    } else {
        return '';
    }
  }


export const formatRating = (rating) => {
    const formattedRating = rating.toFixed(0)
    return formattedRating
}

export const formatReleaseDate = (date) => {
    const yearReleased = date.split("-")[0]
    return yearReleased
}

export const formatCurrency = (amount) => {
    if (amount === 0) {
      return 'Not Reported'
    }

    return amount.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'USD'
    })
  }

export const formatRuntime = (runtime) => {
 return !runtime ? 'Not Reported' : runtime + " mins"
}